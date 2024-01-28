import { AfterViewInit, Component, WritableSignal, effect, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EgRadar, RadarEntry, Sector } from 'eg-radar';
import data from '../../assets/radar-config.json';
import { FormsModule } from '@angular/forms';
import { SectorDetailsComponent } from './sector-details/sector-details.component';
import { BlipDetailsComponent } from './blip-details/blip-details.component';

@Component({
  selector: 'app-radar',
  standalone: true,
  templateUrl: './radar.component.html',
  imports: [FormsModule, SectorDetailsComponent, BlipDetailsComponent],
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements AfterViewInit {
  radar: EgRadar;

  selectedSector: WritableSignal<Sector | undefined> = signal(undefined);
  selectedEntry: WritableSignal<RadarEntry | undefined> = signal(undefined);
  mouseOverEntry: WritableSignal<RadarEntry | undefined> = signal(undefined);

  config: any = data;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.radar = new EgRadar(this.config);

    this.radar.addEventListener('entrySelect', (entry: RadarEntry) => this.selectedEntry.set(entry));
    this.radar.addEventListener('sectorSelect', (sector: Sector) => this.selectedSector.set(sector));
    this.radar.addEventListener('entryHover', (entry: RadarEntry) => this.mouseOverEntry.set(entry));
    this.radar.addEventListener('entryHoverOut', () => this.mouseOverEntry.set(undefined));

    effect(() => {
      if (this.selectedEntry()) {
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { entry: this.selectedEntry()?.id }, queryParamsHandling: 'merge' })
      }
    })
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.radar.render("radarSvg");
      const params = this.activatedRoute.snapshot.queryParams;

      const entryId = parseInt(params['entry']!);
      const entry = this.radar?.entries.find((e: RadarEntry) => e.id == entryId);

      if (entry) {
        this.radar.selectEntry(entry);
        this.radar.selectSector(entry.sector);
      }
    });
  }

  public selectEntry(entry?: RadarEntry) {
    this.radar.selectEntry(entry);
    if (entry) {
      this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { entry: this.selectedEntry()?.id, sector: this.selectedSector()?.id }, queryParamsHandling: 'merge' })
    }
  }

  public onSectorSelect(sector?: Sector) {
    this.radar?.selectSector(sector);
    if (sector) {
      this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { sector: this.selectedSector()?.id, entry: this.selectedEntry()?.id }, queryParamsHandling: 'merge' })
    }
  }

  public onEntryHover(entry: RadarEntry) {
    this.radar.hoverEntry(entry);
  }

  public onEntryHoverOut(entry: RadarEntry) {
    this.radar.hoverEntryOut(entry);
  }

  public onEntrySelect(entry: RadarEntry) {
    this.radar.selectEntry(entry);
  }

}
