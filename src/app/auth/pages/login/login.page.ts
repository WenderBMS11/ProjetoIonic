import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  authForm: FormGroup;

  configs = {
    issignin: 'Login', /*verifica se login deu certo */
    action : 'Login', /*se deu certo */
    actionChange: 'Create account' /*para nova conta */
  }; /*abaixo para uma nova conta */
  private nameControl = new FormControl('',
     [Validators.required, Validators.minLength(3)]);


  constructor(private fb: FormBuilder) { }
  /*Construtor vai subir a tecnologia FormBuilder
  e dar o apelido fb*/
  ngOnInit(): void {
    this.createForm(); /*Criar um método vazio - void
    e demos o nome */
  }
  private createForm(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      /*Validação required (Não aceita nulo), valida email */
      password: ['', [Validators .required, Validators.minLength(6)]]
      /*Validar somente acima de 6 caracteres */
    });
  }

  /*esse gets são para retornas erros ou avisos */
    get email(): FormControl {
      return this.authForm.get('email')as FormControl;
    }

    get password(): FormControl {
      return this.authForm.get('password') as FormControl;
    }
  onSubmit(): void {
    console.log('AutoForm: ', this.authForm.value);
    /*console é para sair na tela, como aconteçe no console no java */
  }
changeAuthAction():  void {
  this.configs.issignin = !this.configs.issignin;
  /* CUma constante que paga a confi
}
}
