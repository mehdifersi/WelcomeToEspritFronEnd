import {Component, OnInit} from '@angular/core';
import {InterviewService} from "../../services/interview.service";
import {Interview} from "../../core/Model/Interview";

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.css']
})
export class InterviewsComponent implements OnInit{

  interviews : any[]=[];
  constructor(private interviewService:InterviewService) {
  }
  ngOnInit(): void {
    this.interviewService.getAllInterviewsWithEvaluatorAndStudentName().subscribe({
      next: (data) => this.interviews = data,
    })
  }

  deleteInterview(id : number) {
    this.interviewService.deleteInterview(id).subscribe({
      next:()=>this.ngOnInit()
    })

  }
}
