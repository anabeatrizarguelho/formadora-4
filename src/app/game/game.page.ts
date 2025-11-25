import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonProgressBar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizResult {
  score: number;
  total: number;
  percentage: number;
  message: string;
  emoji: string;
}

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonProgressBar, IonButtons, IonBackButton]
})
export class GamePage implements OnInit {

  questions: Question[] = [
    {
      id: 1,
      text: 'Qual é a melhor prática para criar uma senha segura?',
      options: [
        'Usar apenas números',
        'Usar uma combinação de letras maiúsculas, minúsculas, números e símbolos',
        'Usar o seu nome e data de nascimento',
        'Usar a mesma senha em todas as contas'
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      text: 'O que você deve fazer se receber um e-mail suspeito pedindo seus dados?',
      options: [
        'Responder com seus dados para confirmar',
        'Clicar em todos os links para verificar',
        'Não responder, não clicar em links e denunciar como spam',
        'Compartilhar com amigos para avisar'
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: 'Qual é a importância de usar autenticação de dois fatores?',
      options: [
        'Não tem importância',
        'Aumenta a segurança da conta ao exigir um segundo método de verificação',
        'Torna a senha mais curta',
        'Permite acessar contas de outras pessoas'
      ],
      correctAnswer: 1
    },
    {
      id: 4,
      text: 'Como você deve armazenar suas senhas de forma segura?',
      options: [
        'Anotar em um papel deixado na mesa',
        'Usar o navegador para salvar todas as senhas automaticamente',
        'Usar um gerenciador de senhas criptografado',
        'Enviar por e-mail para você mesmo'
      ],
      correctAnswer: 2
    },
    {
      id: 5,
      text: 'Qual é o risco de usar Wi-Fi público sem proteção?',
      options: [
        'Não há risco',
        'Hackers podem interceptar seus dados',
        'Sua senha fica mais forte',
        'Você ganha mais velocidade de internet'
      ],
      correctAnswer: 1
    },
    {
      id: 6,
      text: 'O que você deve fazer antes de compartilhar informações pessoais online?',
      options: [
        'Compartilhar imediatamente',
        'Verificar a segurança do site e avaliar se é necessário',
        'Compartilhar com todos',
        'Nunca verificar nada'
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      text: 'Qual é a principal razão para atualizar regularmente seus apps e sistema operacional?',
      options: [
        'Para ter novos ícones',
        'Para receber patches de segurança que fecham vulnerabilidades',
        'Para gastar mais espaço no dispositivo',
        'Não é necessário atualizar'
      ],
      correctAnswer: 1
    },
    {
      id: 8,
      text: 'Como você identifica um site seguro?',
      options: [
        'Pelo tamanho das letras',
        'Pela cor do fundo',
        'Pelo "https://" na barra de endereço e ícone de cadeado',
        'Por ter muitos anúncios'
      ],
      correctAnswer: 2
    },
    {
      id: 9,
      text: 'Qual é a melhor ação se você suspeitar que sua conta foi comprometida?',
      options: [
        'Ignorar o problema',
        'Enviar sua senha por e-mail',
        'Mudar a senha imediatamente e notificar o suporte',
        'Compartilhar a informação em redes sociais'
      ],
      correctAnswer: 2
    },
    {
      id: 10,
      text: 'O que você deve fazer com phishing?',
      options: [
        'Clicar em todos os links',
        'Responder com seus dados pessoais',
        'Reconhecer, não clicar e denunciar',
        'Compartilhar o link com contatos'
      ],
      correctAnswer: 2
    }
  ];

  currentQuestionIndex: number = 0;
  userAnswers: number[] = [];
  quizStarted: boolean = false;
  quizFinished: boolean = false;
  quizResult: QuizResult | null = null;

  constructor() { }

  ngOnInit() {
  }

  startQuiz() {
    this.quizStarted = true;
    this.quizFinished = false;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.quizResult = null;
  }

  selectAnswer(optionIndex: number) {
    this.userAnswers[this.currentQuestionIndex] = optionIndex;
  }

  isAnswerSelected(optionIndex: number): boolean {
    return this.userAnswers[this.currentQuestionIndex] === optionIndex;
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.finishQuiz();
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  finishQuiz() {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].correctAnswer) {
        score++;
      }
    }

    const percentage = (score / this.questions.length) * 100;
    let message = '';
    let emoji = '';

    if (score === 10 || score === 9) {
      message = '🔒 Excelente! Você está seguro(a)!';
      emoji = '✅';
    } else if (score >= 6) {
      message = '⚠️ Bom! Mas pode melhorar!';
      emoji = '📚';
    } else {
      message = '❌ Você precisa proteger melhor seus dados!';
      emoji = '🛡️';
    }

    this.quizResult = {
      score,
      total: this.questions.length,
      percentage,
      message,
      emoji
    };

    this.quizFinished = true;
  }

  restartQuiz() {
    this.startQuiz();
  }

  getCurrentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  getProgress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  getOptionLetter(index: number): string {
    return String.fromCharCode(65 + index);
  }

}
