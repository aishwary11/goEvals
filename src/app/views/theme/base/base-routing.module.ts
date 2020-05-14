import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes } from '@angular/router'
import { AsideRightComponent } from '../aside-right/aside-right.component'
import { AddUserComponent } from '../aside-right/add-user/add-user.component'
import { AddUser2Component } from '../aside-right/add-user2/add-user2.component'
import { BillingComponent } from '../aside-right/billing/billing.component'
import { InvoiceComponent } from '../aside-right/invoice/invoice.component'
import { InvoiceListComponent } from '../aside-right/invoice/invoice-list/invoice-list.component'
import { InvoiceDetailsComponent } from '../aside-right/invoice/invoice-details/invoice-details.component'
import { PersonalInterviewComponent } from '../aside-right/personal-interview/personal-interview.component'
import { EmailTemplateComponent } from '../aside-right/email-template/email-template.component'
import { QuestionDatabankComponent } from '../aside-right/question-databank/question-databank.component'
import { SettingsComponent } from '../aside-right/settings/settings.component'
import { HelpComponent } from '../aside-right/help/help.component'


const routes: Routes = [
  {
    path: '', component: AsideRightComponent, children: [
      { path: '', component: AddUserComponent },
      { path: 'add-user', component: AddUser2Component },
      { path: 'billing', component: BillingComponent },
      {
        path: 'invoice', component: InvoiceComponent, children: [
          { path: 'invoice-list', component: InvoiceListComponent },
          { path: 'invoice-details', component: InvoiceDetailsComponent }
        ]
      },
      { path: 'interview', component: PersonalInterviewComponent },
      { path: 'email-template', component: EmailTemplateComponent },
      { path: 'question', component: QuestionDatabankComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'help', component: HelpComponent },]
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BaseRoutingModule { }
