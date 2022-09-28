import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './shared/custom_attribute_directives/basic-highlight.directive';
import { DirectivesComponent } from './directives/directives.component';
import { BetterHighlightDirective } from './shared/custom_attribute_directives/better-highlight.directive';
import { UnlessDirective } from './shared/custom_structural_directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
