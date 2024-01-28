import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EgRadar, RadarEntry, Sector } from 'eg-radar';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-sector-details',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownComponent],
  templateUrl: './sector-details.component.html',
  styleUrl: './sector-details.component.css'
})
export class SectorDetailsComponent implements AfterViewInit {
  @Input({ required: true }) radar!: EgRadar;
  @Input() sector?: Sector;
  @Input() selectedEntry?: RadarEntry;
  @Input() mouseOverEntry?: RadarEntry;

  @Output() onEntrySelect = new EventEmitter<RadarEntry>();
  @Output() onEntryHover = new EventEmitter<RadarEntry>();
  @Output() onEntryHoverOut = new EventEmitter<RadarEntry>();

  groups: any;

  ngAfterViewInit(): void {
    this.groups = this.groupEntriesBySectorAndRing(this.radar.entries);
  }

  private groupEntriesBySectorAndRing(entries: RadarEntry[]) {
    return entries.reduce((acc: any, item: any) => {
      const { sector, ring } = item;

      if (!acc[sector.id]) {
        acc[sector.id] = [];
      }
      if (!acc[sector.id][ring.id]) {
        acc[sector.id][ring.id] = [];
      }
      acc[sector.id][ring.id].push(item);
      return acc;
    }, []);
  }
}
