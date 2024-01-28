import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadarEntry } from 'eg-radar';
import { MarkdownComponent } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import fm from 'front-matter';
import { map, take } from 'rxjs';
import * as DOMPurify from 'dompurify';

@Component({
  selector: 'app-blip-details',
  standalone: true,
  imports: [CommonModule, MarkdownComponent, HttpClientModule],
  templateUrl: './blip-details.component.html',
  styleUrl: './blip-details.component.css'
})
export class BlipDetailsComponent {

  constructor(private http: HttpClient) { }

  private _entry?: RadarEntry;

  public retrieveMD(path: any) {
    this.http.get(path, { responseType: 'text' })
      .pipe(take(1))
      .pipe(map((content: any) => content))
      .subscribe((data: any) => {
        this._entry!.data._markdown = fm(data);
        // Sanitize the HTML to prevent XSS attacks
        this._entry!.data._markdown.body = DOMPurify.sanitize(this._entry!.data._markdown.body);
      });
  }

  onLoad($event: string) {
    console.log($event);
  }

  @Input() set entry(entry: RadarEntry | undefined) {
    this._entry = entry;
    if (this._entry && !this._entry.data._markdown) {
      this.retrieveMD(this._entry?.data.md);
    }
  }

  get entry(): RadarEntry | undefined {
    return this._entry;
  }

}
