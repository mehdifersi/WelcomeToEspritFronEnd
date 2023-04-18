import { Component } from '@angular/core';
import { Offre } from 'src/app/core/Model/Offre';
import { OffreService } from 'src/app/services/offre.service';
import { Type } from 'src/app/core/Model/Type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent {
  offer: Offre = {
    idOffre: 0,
    title: "",
    type: "" as Type,
    description: "",
    capacity: 10
  };


  constructor(private offreService: OffreService,private router: Router) {}

  ngOnInit() {
    this.initValidation();
  }

  initValidation() {
    "use strict";
    const forms = document.querySelectorAll(".requires-validation");
    Array.from(forms).forEach(form => {
      form.addEventListener(
        "submit",
        event => {
          // Cast the form element to HTMLFormElement interface
          const htmlForm = form as HTMLFormElement;
          if (!htmlForm.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            console.log(this.offer.title);
            this.offreService.postOffre(this.offer).subscribe(
              () => {
                console.log('Offer added successfully');
                // Reset the form
                this.router.navigate(['/homeback'])
              },
              (              error: any) => {
                console.error('Failed to add offer', error);
              }
            );
          }

          htmlForm.classList.add("was-validated");
        },
        false
      );
    });
  }

}
