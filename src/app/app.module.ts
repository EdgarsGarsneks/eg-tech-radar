import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadarComponent } from './radar/radar.component';
import { FormsModule } from '@angular/forms';
import { MARKED_OPTIONS, MarkdownModule, MarkedRenderer } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SectorDetailsComponent } from './radar/sector-details/sector-details.component';
import { BlipDetailsComponent } from './radar/blip-details/blip-details.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RadarComponent,
    NavbarComponent,
    SectorDetailsComponent,
    BlipDetailsComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MARKED_OPTIONS,
        useFactory: () => {
          const renderer = new MarkedRenderer();
          const headings = ['5xl', '4xl', '3xl', '2xl', 'xl', 'lg']

          renderer.heading = (text: string, level: number, raw: string) => {
            return `<h1 class="text-${headings[level - 1]} font-bold my-3">${text}</h1>`;
          };

          renderer.link = (href: string, title: string, text: string) => {
            return `<a class="font-bold text-purple-700" href="${href}" target="_blank">${text}</a>`;
          }

          renderer.list = (body: string, ordered: boolean, start: number) => {
            if (ordered) {
              return `<ol class="list-decimal list-inside">${body}</ol>`;
            }
            return `<ul class="list-disc list-inside">${body}</ul>`;
          }

          renderer.listitem = (text: string) => {
            return `<li>${text}</li>`;
          }

          renderer.table = (header: string, body: string) => {
            return `<table class="table-auto">${header}${body}</table>`;
          }

          renderer.tablerow = (content: string) => {
            return `<tr>${content}</tr>`;
          }

          renderer.codespan = (code: string) => {
            return `<code class="bg-gray-200 rounded-md p-1">${code}</code>`;
          }

          renderer.tablecell = (content: string, flags: { header: boolean }) => {
            if (flags.header) {
              return `<th class="border px-4 py-2">${content}</th>`;
            }
            return `<td class="border px-4 py-2">${content}</td>`;
          }

          renderer.hr = () => {
            return `<hr class="my-4">`;
          }

          renderer.image = (href: string, title: string, text: string) => {
            return `<img class="inline-block" src="${href}" alt="${text}">`;
          }

          return {
            renderer: renderer,
            gfm: true,
            breaks: false,
            pedantic: false,
          };
        }
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
