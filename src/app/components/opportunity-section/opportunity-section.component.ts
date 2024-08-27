import { Component } from '@angular/core';
import { Fiture } from '../../models/fiture';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opportunity-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './opportunity-section.component.html',
  styleUrl: './opportunity-section.component.css'
})
export class OpportunitySectionComponent {

  public fitures: Fiture[] = [
    {
      "icon": 'fa-solid fa-chart-line',
      "title": "Товароучетная система",
      "text": "Управление товарами и ценами. Планирование закупок и контроль остатков. Резервы. Модификации. Инвентаризации.",
    },
    {
      "icon": "fa-solid fa-satellite-dish",
      "title": "Автоматизация розницы",
      "text": "Автоматизация розничной торговли играет ключевую роль в современном бизнесе, позволяя упростить управление магазином, оптимизировать процессы и улучшить обслуживание клиентов.",
    },
    {
      "icon": "fa-solid fa-layer-group",
      "title": "Маркетплейсы",
      "text": "Это позволяет автоматизировать управление продажами, инвентаризацией и заказами через централизованную систему. В результате вы можете расширить свою аудиторию, увеличить продажи и повысить эффективность бизнеса.",
    },
    {
      "icon": "fa-solid fa-brush",
      "title": "CRM для торговли",
      "text": "История покупок, сегментация базы клиентов, бонусные программы лояльности. Статистика. Телефония и рассылки.",
    },
    {
      "icon": "fa-solid fa-star",
      "title": "Печать документов",
      "text": "Этикетки и ценники. Счета, товарные чеки, накладные, ТТН, акты, счета-фактуры. Собственные шаблоны.",
    },
    {
      "icon": "fa-brands fa-slack",
      "title": "Интеграция",
      "text": "Больше 100 готовых интеграций: CMS, маркетплейсы, аналитика, банки, службы доставки. Экспорт в 1С:Бухгалтерию. API. Помощь с настройками.",
    }
  ]
}
