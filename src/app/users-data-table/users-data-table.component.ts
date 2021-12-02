import { AfterViewInit, ChangeDetectorRef, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UserService } from '../users/user.service';
import { IUser } from './../models/user';

@Component({
  selector: 'users-data-table',
  templateUrl: './users-data-table.component.html',
  styleUrls: ['./users-data-table.component.css']
})
export class UsersDataTableComponent implements AfterViewInit, OnInit{
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,  {static: true}) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<IUser>;

  dataSource!: MatTableDataSource<IUser>;
  
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['pic','fullName', 'email', 'gender', 'age'];

  constructor(private userService: UserService) {
    this.dataSource = new MatTableDataSource<IUser>();    
  }  
  
  ngOnInit(){
    this.userService.fetchUsersData().subscribe(data => {
      console.log("Data fetched");
      console.log(data);
      this.dataSource.data = this.userService.parseUsers(data.results);
    });
  }
  
  ngAfterViewInit(): void {    
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;       
  }
}
