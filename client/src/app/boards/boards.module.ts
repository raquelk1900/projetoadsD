import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth/services/authGuard.service';
import { BoardsComponent } from './components/boards/boards.component';
import { BoardsService } from '../shared/types/services/boards.service';
import { InlineFormModule } from "../shared/modules/inlineForm/inlineForm.module";
import { TopbarModule } from '../shared/modules/inlineForm/topbar/topbar.module';

const routes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    canActivate: [AuthGuardService],
   
  },
];

@NgModule({
    declarations: [BoardsComponent],
    providers: [BoardsService],
    imports: [CommonModule, RouterModule.forChild(routes), InlineFormModule, TopbarModule]
})
export class BoardsModule {}
