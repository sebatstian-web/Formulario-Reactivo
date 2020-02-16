import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
// import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  mostrarInfo: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    // Se realiza la llamada en el constructor para una instancia inmediata
    // Si se espera a cargar en ngOnInit causaria un error
    this.formulario();
  }

  formulario() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });

    // this.form.valueChanges.pipe(debounceTime(500)).subscribe(console.log);
    // this.form.get('email').valueChanges.subscribe(console.log);
  }

  // Obteniendo los campos del formulario
  get campoNombre() {
    return this.form.get('nombre');
  }

  get campoEmail() {
    return this.form.get('email');
  }

  guardar(form: FormGroup) {
    if (this.form.invalid) return;

    this.mostrarInfo = true;
    console.log('Información del formulario:', form);
  }
}
