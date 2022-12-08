import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-john',
  template: `
    <div style="background-color:#edf0f1; padding: 8px; padding-left: 12px; 
                  border-radius: 12px; border: 1px solid #bcd; line-height: 98%; width: 720px;">
      This is the Angular [john] component from the john.component.ts file.<br/>
      Below are its children components:

      <table cellspacing="0" cellpadding="0">
        <tr>
          <td><app-box2 [scount]= tsName[0] [scolor]= tsColor[0] [xtabArg]= tsArg[0]></app-box2></td>
          <td><app-box2 [scount]= tsName[1] [scolor]= tsColor[1] [xtabArg]= tsArg[1]></app-box2></td>
        </tr>
        <tr>
          <td><app-box2 [scount]= tsName[2] [scolor]= tsColor[2] [xtabArg]= tsArg[2]></app-box2></td>
          <td><app-box2 [scount]= tsName[3] [scolor]= tsColor[3] [xtabArg]= tsArg[3]></app-box2></td>
        </tr>
      </table>
      
      End [john] component 
    </div>
  ` ,
  styles: [`p{color: black}`]
})
export class JohnComponent {
  public tsName: string[] = ['Ford','Audi','VW','Toyota'];
  public tsColor: string[] = ['#FFD','#FDD','#FEB','#DFC'];

  public tsArg: any = [ 
    {sinfo: 'Tom', col: '#a2e6b4'},
    {sinfo: 'Bob', col: '#ead7e2'},
    {sinfo: 'Peter', col: '#ededc5'},
    {sinfo: 'Mark', col: '#dddbeb'},
  ]

}
