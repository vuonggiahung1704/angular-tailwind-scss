import { Routes } from '@angular/router';
import { AiDocumentComponent } from './pages/ai-document/ai-document.component';
import { AudioRecordComponent } from './pages/audio-record/audio-record.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent }, // Trang chủ
  { path: 'ai-document', component: AiDocumentComponent }, // Trang AI Document
  { path: 'audio-record', component: AudioRecordComponent }, // Trang Audio Record
];
