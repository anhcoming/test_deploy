import { NzFormModule } from 'ng-zorro-antd/form';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { IconsProviderModule } from '../icons-provider.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  exports: [
    NzLayoutModule,
    NzBadgeModule,
    NzButtonModule,
    NzProgressModule,
    NzMenuModule,
    NzImageModule,
    NzDividerModule,
    NzTableModule,
    IconsProviderModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzAutocompleteModule,
    NzSelectModule,
    NzUploadModule,
  ],
})
export class NgzorroModule {}
