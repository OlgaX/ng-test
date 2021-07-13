import {Injectable} from '@angular/core';
import {CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class LeavePageGuard implements CanDeactivate<any> {
  public canDeactivate(component: any): boolean | Observable<boolean> {
    return true;
  }
}
