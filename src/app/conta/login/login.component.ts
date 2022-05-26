import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../models/user';
import { ContaService } from '../services/conta.service';

import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';
import { FormBaseComponent } from 'src/app/base-components/form-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends FormBaseComponent implements OnInit {

  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  
  loginForm: FormGroup;
  user: User;
  errors: any[] = [];


  returnUrl: string;

  constructor(private fb: FormBuilder,
      private contaService: ContaService,
      private router: Router,
      private route: ActivatedRoute,
      private toastr: ToastrService) { 

        super();

        this.validationMessages = {
          email: {
            required: 'Informe o e-mail',
            email: 'Email inválido'
          },
          password: {
            required: 'Informe a senha',
            rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
          }        
        };

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

        super.configurarMensagensValidacaoBase(this.validationMessages);
        
  }

  ngOnInit(): void {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.rangeLength([6, 15])]]
    });

  }

  ngAfterViewInit(): void {
    super.configurarValidacaoFormularioBase(this.formInputElements, this.loginForm);
  }

  login(){
    if (this.loginForm.dirty && this.loginForm.valid){
      this.user = Object.assign({}, this.user, this.loginForm.value);

      this.contaService.login(this.user)
        .subscribe(
          sucesso => { this.processarSucesso(sucesso) },
          falha => { this.processarFalha(falha) }
        );

    }
  }

  processarSucesso(response: any) { 
    this.loginForm.reset();
    this.errors = [];

    this.contaService.LocalStorage.salvarDadosLocaisUsuario(response);

    let toast = this.toastr.success('Login realizado com Sucesso!', 'Bem vindo!!!',{
      progressBar: true
    });
    
    if (toast){
      toast.onHidden.subscribe(() => {
        this.returnUrl
          ? this.router.navigate([this.returnUrl])
          : this.router.navigate(['/home']);
      })
    }
  }

  processarFalha(fail: any) {
    this.errors = fail.error.errors;
    this.toastr.error('Ocorreu um erro!', 'Opa :(',{
      progressBar: true
    });
  }
  
}
