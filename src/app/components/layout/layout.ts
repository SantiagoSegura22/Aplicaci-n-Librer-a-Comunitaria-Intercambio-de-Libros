import { Component } from '@angular/core';
import { Sidebard } from '../sidebard/sidebard';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [Sidebard,RouterOutlet],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
