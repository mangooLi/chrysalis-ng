import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { Store } from '@ngrx/store';
import { NORMAL, COLLAPSED } from '../../../../reducers/re-sidebar';
import { layoutSize } from '../../../../global.config';


@Component({
  selector: 'sidebarItem',
  templateUrl: './sidebarItem.component.html',
  styleUrls: ['./sidebarItem.component.scss']
})
export class SidebarItemComponent {
  arrows = false;
  @Input() isCollapse: boolean;
  @Input() menuItem: any;
  @Output() toggleCollapse = new EventEmitter<any>();
  constructor(private Store: Store<any>) { }

  onToggleSub(event) {
    if (this.sidebarCollapse()) {
      this.Store.dispatch({ type: NORMAL });
      this.toggleCollapse.emit(false);
    }
    const sildebar = $(event.currentTarget.nextSibling).next();
    this.arrows = !this.arrows;
    sildebar.stop().slideToggle();
  }

  private sidebarCollapse() {
    return window.innerWidth <= layoutSize.widthCollapseSidebar;
  }
}
