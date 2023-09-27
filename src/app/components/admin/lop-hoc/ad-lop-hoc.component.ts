import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { AddShareComponent } from 'src/app/pages/share/modal/add-share/add-share.component';

@Component({
  selector: 'app-lop-hoc',
  templateUrl: './ad-lop-hoc.component.html',
  styleUrls: ['./ad-lop-hoc.component.scss'],
})
export class AdLopHocComponent {
  constructor(private modal: NzModalService) {
    this.dataShow = this.dataSet;
  }
  first: boolean = false;
  dataShow: any;
  search: any;
  dataRow: any;
  currentIndex: any;
  dataSet: any = [
    {
      key: '1',
      name: 'Angular',
      age: 32,
      address: 'New York No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green1',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green2',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green3',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green4',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green5',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green6',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green7',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green9',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green11',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      gender: 'Male',
      phone: '0355301887',
      info: 'Các ứng dụng Angular được xây dựng bằng ngôn ngữ TypeScript (là ngôn ngữ lập trình tập hợp siêu cú pháp nghiêm ngặt của JavaScript), đảm bảo tính bảo mật cao hơn vì nó hỗ trợ các kiểu giao diện cần thiết. Bên cạnh đó, nó còn giúp phát hiện và loại bỏ sớm các lỗi trong quá trình viết mã hoặc thực hiện các nhiệm vụ bảo trì.',
    },
  ];

  focusRow(i: any) {
    this.dataRow = this.dataSet[i];
    this.currentIndex = i;
    this.first = true;
    ////làm trắng tất cả
    for (let i = 0; i < this.dataSet.length; i++) {
      const rowI = document.getElementById('row' + i) as HTMLInputElement;
      rowI.style.backgroundColor = 'white';
      rowI.style.color = 'black';
    }
    ///bôi màu cái đang chọn
    const row = document.getElementById('row' + i) as HTMLInputElement;
    row.style.backgroundColor = '#1890ff';
    row.style.color = 'white';
  }

  getLeft(i: number) {
    i++;
    return 30 * i + 'px';
  }

  searchBy(e: any) {
    console.log(e);
    this.search = e;
    if (this.search == undefined) {
      return;
    }
    let search: any = this.search.toLowerCase().trim();
    this.dataShow = this.dataSet.filter((e: any) =>
      e.name.toLowerCase().includes(search)
    );
    if (this.dataShow.length == 0) {
      this.dataRow = this.dataSet;
    }
  }

  addStudentPopup() {
    this.modal.create({
      nzTitle: 'Add students',
      nzContent: AddShareComponent,
      nzWidth: '130vh',
      nzCentered: true,
    });
  }

  openInfo() {
    this.modal.create({
      nzContent: `
      <p class="fw-bold">Thông tin về ${
        this.dataSet[this.currentIndex].name
      }:</p>
      <p>${this.dataSet[this.currentIndex].info}</p>`,
      nzFooter: null,
    });
  }
}
