import { TestService } from './../../../../services/test/test.service';
import { OptionService } from 'src/app/services/option/option.service';
import { QuestionService } from './../../../../services/question/question.service';
import { SectionService } from './../../../../services/section/section.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orientation-test',
  templateUrl: './orientation-test.component.html',
  styleUrls: ['./orientation-test.component.css']
})
export class OrientationTestComponent implements OnInit {

  constructor(private SectionService:SectionService,private QuestionService:QuestionService,private OptionService:OptionService,private TestService:TestService,private Router:Router) { }

  ngOnInit(): void {
  }

}
