import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/cards/card.module';
import { PhotoModule } from './../photo/photo.module';
import { filterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from '@angular/core';
import { PhotosComponent } from './photos/photos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    filterByDescription,
    SearchComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule{

}
