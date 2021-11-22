import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { UserService } from '../users/user.service';
import { UsersDataTableDataSource, IUser } from './users-data-table-datasource';

@Component({
  selector: 'users-data-table',
  templateUrl: './users-data-table.component.html',
  styleUrls: ['./users-data-table.component.css']
})
export class UsersDataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,  {static: true}) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IUser>;

  dataSource!: UsersDataTableDataSource;
  clicks: number;
  usersVisible: Boolean = false;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pic','fullName', 'email', 'gender', 'age'];

  constructor(private userService: UserService) {
    this.dataSource = new UsersDataTableDataSource();
    this.clicks = 0;
    this.userService.currentList.subscribe(data => {
      this.dataSource.data = data;
    });
  }  
  
  ngAfterViewInit(): void {    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;   
  }
  
  zipzap(){
    this.paginator.nextPage();
    this.paginator.previousPage();
  }  
  

  toggleUsersView(){
    this.usersVisible = !this.usersVisible;
  }
}
