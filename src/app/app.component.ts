import { Component } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'AngularUI';
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
) { }

ngOnInit() {
  this.form = this.formBuilder.group({

  });
}

}
