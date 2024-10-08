import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServiceCard } from '../../models/service-card';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {
  
  public service_cards: ServiceCard[] = [
      {
        'title': 'Автоматизации торговли',
        'article': 'Автоматизация торговли - вот что предлагает наш онлайн-сервис «tijorat.pro»! Мы помогаем вашему бизнесу оптимизировать процессы продаж, управления запасами, а также повышать эффективность работы сотрудников. Наш сервис предоставляет широкий спектр инструментов, включая управление складом, автоматизацию оформления заказов, аналитику продаж и многое другое. Присоединяйтесь к «tijorat.pro» уже сегодня и увидите, как автоматизация может улучшить ваш бизнес и увеличить его прибыльность!',
        'textcolor': 'text-sky-400',
        'bgColor': 'hover:bg-sky-400',
        'iconcolor': 'bg-sky-200',
        'borderColor': 'border-sky-400'
      },
      {
        'title': 'Автоматизация производственных процессов',
        'article': 'Онлайн-сервис «tijorat.pro» - идеальное решение для автоматизации производственных процессов! Наш сервис предоставляет широкий набор инструментов для управления производством, включая планирование производственных операций, контроль над запасами и сырьем, мониторинг производственной эффективности и многое другое. Благодаря удобному интерфейсу и гибким настройкам, вы сможете легко адаптировать сервис под свои потребности и оптимизировать производственные процессы. Присоединяйтесь к нам сегодня и повысьте эффективность вашего производства!',
        'textcolor': 'text-orange-400',
        'bgColor': 'hover:bg-orange-400',
        'iconcolor': 'bg-orange-200',
        'borderColor': 'border-orange-400'
      },
      {
        'title': 'Программы для бизнеса',
        'article': 'Программы для автоматизации бизнеса - вот что предлагает наш онлайн-сервис «tijorat.pro»! Мы предлагаем мощный инструментарий, который поможет вам оптимизировать процессы в вашем бизнесе, повысить эффективность работы и сократить временные затраты. Наш сервис включает в себя широкий спектр функций, начиная от управления персоналом и учета финансовых операций, заканчивая аналитикой данных и взаимодействием с клиентами. Присоединяйтесь к «tijorat.pro» уже сегодня и убедитесь в том, как легко и эффективно можно автоматизировать бизнес с нашим программным обеспечением!',
        'textcolor': 'text-rose-600',
        'bgColor': 'hover:bg-rose-600',
        'iconcolor': 'bg-rose-200',
        'borderColor': 'border-rose-600'
      },
      {
        'title': 'Автоматизация медицинских информационных систем',
        'article': 'Автоматизация медицинских информационных систем - это ключевое преимущество нашего онлайн-сервиса «tijorat.pro»! Мы предлагаем полную автоматизацию всех аспектов работы вашей медицинской организации, начиная от управления графиком врачей и планирования регистрации пациентов, заканчивая ведением историй болезней, учетом койки и аппаратов, а также курсом лечения пациентов. Наш сервис делает все эти процессы легкими, удобными и эффективными, позволяя вам сосредоточиться на предоставлении качественной медицинской помощи вашим пациентам. Присоединяйтесь к «tijorat.pro» уже сегодня и повысьте эффективность работы вашей медицинской организации!',
        'textcolor': 'text-green-500',
        'bgColor': 'hover:bg-green-500',
        'iconcolor': 'bg-green-200',
        'borderColor': 'border-green-500'
      },
      {
        'title': 'Автоматизация лабораторных информационных систем',
        'article': 'Онлайн-сервис «tijorat.pro» - ваш идеальный выбор для автоматизации лабораторных информационных систем! Наш сервис предоставляет широкий функционал для управления лабораторными данными, включая учет образцов, результатов анализов, а также интеграцию с оборудованием и устройствами сбора данных. Благодаря легкому управлению и интуитивно понятному интерфейсу, вы сможете оптимизировать процессы в вашей лаборатории, повысить эффективность работы и обеспечить точность и надежность результатов. Присоединяйтесь к нашему сервису сегодня и улучшите качество работы вашей лаборатории!',
        'textcolor': 'text-fuchsia-600',
        'bgColor': 'hover:bg-fuchsia-600',
        'iconcolor': 'bg-fuchsia-200',
        'borderColor': 'border-fuchsia-600'
      },
      {
        'title': 'Автоматизация услуги',
        'article': 'Автоматизация услуги - это то, что предлагает наш онлайн-сервис «tijorat.pro»! Мы помогаем вашей компании оптимизировать и упростить процессы предоставления услуг, обеспечивая эффективное управление клиентскими запросами, планирование работы и распределение ресурсов. Наш сервис предлагает широкий спектр возможностей, включая удобное составление графика работы сотрудников, автоматизацию бухгалтерских процессов, ведение базы данных клиентов и многое другое. Присоединяйтесь к «tijorat.pro» уже сегодня и станьте свидетелем повышения эффективности и качества ваших услуг!',
        'textcolor': 'text-pink-500',
        'bgColor': 'hover:bg-pink-500',
        'iconcolor': 'bg-pink-200',
        'borderColor': 'border-pink-500'
      },
  ]

  public ishovered:boolean = false;
}
