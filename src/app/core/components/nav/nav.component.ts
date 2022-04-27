import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {

  version$!: any;
  constructor(
    private versionServ: VersionService,
    private cd: ChangeDetectorRef
  ) {
    this.version$ = this.versionServ.numVersion
  }

  ngOnInit(): void {}
  increment(): void {
    this.versionServ.increment();
  }
  check() {
    console.log('CD NAV');
  }
}
