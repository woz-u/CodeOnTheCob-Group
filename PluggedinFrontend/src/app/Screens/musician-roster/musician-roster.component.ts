import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-musician-roster',
  templateUrl: './musician-roster.component.html',
  styleUrls: ['./musician-roster.component.css'],
})
export class MusicianRosterComponent implements OnInit {
  musicians: any;

  getMusicians(){
    this.musicianService.getAll().subscribe((musician) => (this.musicians = musician));
  }

  constructor(private musicianService: LoginService) {}

  ngOnInit(): void {
    this.getMusicians()
  }
}
