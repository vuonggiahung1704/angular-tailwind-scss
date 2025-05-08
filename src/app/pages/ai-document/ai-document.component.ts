import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ai-document',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule, MatIconModule],
  templateUrl: './ai-document.component.html',
  styleUrl: './ai-document.component.scss',
})
export class AiDocumentComponent {
  tabs = [
    { label: 'Tab 1', content: 'Nội dung Tab 1' },
    { label: 'Tab 2', content: 'Nội dung Tab 2' },
    { label: 'Tab 3', content: 'Nội dung Tab 3' },
  ];

  selectedTab = 0;

  selectTab(index: number): void {
    this.selectedTab = index;
  }

  selectedValue: string = 'pizza-0';
  foods = [
    { value: 'pizza-0', viewValue: 'Pizza' },
    { value: 'burger-1', viewValue: 'Burger' },
    { value: 'sushi-2', viewValue: 'Sushi' },
  ];

  audioList = [
    { time: '00:10', title: 'Audio 1', src: 'assets/audio/audio1.mp3' },
    { time: '00:20', title: 'Audio 2', src: 'assets/audio/audio2.mp3' },
    { time: '00:30', title: 'Audio 3', src: 'assets/audio/audio3.mp3' },
  ];

  // Phát âm thanh
  playAudio(src: string) {
    const audio = new Audio(src);
    audio.play();
  }
}
