import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { AddUserComponent } from './add-user/add-user.component'
import { AddUser2Component } from './add-user2/add-user2.component'
import { BillingComponent } from './billing/billing.component'
import { InvoiceComponent } from './invoice/invoice.component'
import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component'
import { InvoiceDetailsComponent } from './invoice/invoice-details/invoice-details.component'
import { PersonalInterviewComponent } from './personal-interview/personal-interview.component'
import { EmailTemplateComponent } from './email-template/email-template.component'
import { QuestionDatabankComponent } from './question-databank/question-databank.component'
import { SettingsComponent } from './settings/settings.component'
import { HelpComponent } from './help/help.component'
import { AsideRightComponent } from './aside-right.component'


const routes: Routes = [
  {
    path: '', component: AsideRightComponent, children: [{
      path: 'add-user',
      component: AddUserComponent
    },
    {
      path: 'add-user2',
      component: AddUser2Component
    },
    {
      path: 'billing',
      component: BillingComponent
    },
    {
      path: 'invoice',
      component: InvoiceComponent,
      children: [
        {
          path: 'invoice-list',
          component: InvoiceListComponent
        },
        {
          path: 'invoice-details',
          component: InvoiceDetailsComponent
        }
      ]
    },
    {
      path: 'interview',
      component: PersonalInterviewComponent
    },
    {
      path: 'email-template',
      component: EmailTemplateComponent
    },
    {
      path: 'question',
      component: QuestionDatabankComponent
    },
    {
      path: 'settings',
      component: SettingsComponent
    },
    {
      path: 'help',
      component: HelpComponent
    }]
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AsideRightRoutingModule { }
