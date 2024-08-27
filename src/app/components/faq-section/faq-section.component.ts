import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface FAQI {
  'ques': string,
  'ans': string,
  'active': boolean
}
@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.css'
})
export class FaqSectionComponent {

  public faqs: FAQI[] = [
    {
      'ques': 'Вы обучите моих Пользовательов работать в системе «tijorat.pro»?',
      'ans': 'Да, мы проводим корпоративные обучения Пользовательов Вашей компании для правильной работы в сервисе «tijorat.pro», также проводим обучения для руководителей.',
      'active': false
    },
    {
      'ques': 'В чем преимущества сервиса «tijorat.pro» перед 1С?',
      'ans': '1С:Управление торговлей уступает и в наличии функций шаблона форм, адресного хранения и технологических карт. Сервис «tijorat.pro» выходит вперед и за счёт работы с клиентами, которым присылают уведомления и отчеты. Выбор клиентов падает на «tijorat.pro» , благодаря широкой функциональности, поддержке клиентов и более низкой цене на тарифы.',
      'active': false
    },
    {
      'ques': 'Для чего нужен сервис «tijorat.pro»?',
      'ans': 'Система «tijorat.pro» - это веб-сервис для управления торговлей, предназначенный для автоматизации малого и среднего бизнеса. Позволяет управлять продажами и закупками, контролировать взаиморасчеты, работать с клиентской базой, вести складской учет, а также печатать все необходимые для ведения бизнеса документы.',
      'active': false
    },
  ]
  public actives: boolean[] = []

  public active:boolean = false;
  public showAns(index: number) {
    this.active = !this.active;
    this.actives = this.faqs.map((_, i) => i === index);

    for (let i=0; i<this.actives.length; i++) {
        this.faqs[i].active = this.actives[i];
    }

    console.log(this.actives, this.faqs);
  }
}
