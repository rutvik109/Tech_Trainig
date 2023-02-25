import { Component ,  ViewChild} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

constructor(private service : AuthService){};

ngOnInit(){
  this.LoadUser();
}

displayedColumns: string[] = ['username', 'name', 'email' ,'role', 'status','action'];

userlist : any;
dataSource: any;
@ViewChild(MatPaginator) paginator!: MatPaginator;

LoadUser(){
  this.service.GetAll().subscribe((data) =>{
    this.userlist = data;
    this.dataSource = new MatTableDataSource(this.userlist);
    this.dataSource.paginator = this.paginator;
  })
}

updateUser(id : any){
console.log(id);
}


}
