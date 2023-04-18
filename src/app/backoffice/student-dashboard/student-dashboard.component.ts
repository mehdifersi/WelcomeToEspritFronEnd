import {Component, OnInit} from '@angular/core';
import {InterviewService} from "../../services/interview.service";
import {Interview} from "../../core/Model/Interview";

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit{

  interviews!: Interview[];


  constructor(private interviewService: InterviewService) {
  }

  ngOnInit(): void {
    this.interviewService.GetInterviews().subscribe({
      next: (data) => this.interviews = data,
    })

  }


}
