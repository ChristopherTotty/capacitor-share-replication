import { Component } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  share = () => {
    let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus turpis sit amet ipsum rhoncus congue. Vivamus commodo libero nunc, quis pellentesque eros ultrices a. Nunc sit amet diam at mi vulputate rutrum. Ut nisi leo, lobortis quis diam sed, tempus pellentesque dui. Integer lobortis vehicula elit eget elementum. Pellentesque gravida arcu elit, ac fermentum tellus convallis vitae. Morbi finibus mi sit amet erat ultrices, a fringilla neque vulputate. Aenean ut efficitur metus. In ultrices ornare dui laoreet commodo. Donec et dui odio. Donec aliquam est libero, in tristique orci maximus vel. Pellentesque lectus magna, placerat tincidunt efficitur a, finibus in tellus. Duis consectetur lorem ut turpis porttitor, eu interdum metus fringilla. Curabitur porttitor nunc id tortor mattis, a facilisis ipsum molestie. Nunc pellentesque, nisl semper euismod tempor, odio sem finibus massa, nec commodo odio mauris et purus.

    Aenean odio massa, sagittis et eros vitae, vulputate posuere nunc. Maecenas vitae maximus quam, at fermentum metus. Sed ac commodo enim, eu tincidunt dui. Nam dolor purus, varius sit amet metus ut, sagittis venenatis quam. Cras sapien justo, ultrices ultrices magna at, dapibus condimentum magna. Sed bibendum eget nulla sed facilisis. Aliquam sit amet urna augue. Cras sed accumsan dolor. Nulla sed elit vitae ante vulputate tincidunt id at augue. Cras fringilla dictum metus quis elementum. Mauris hendrerit sit amet leo id pharetra. Nulla enim ligula, viverra vel eleifend ac, posuere id urna. Cras gravida tincidunt neque, ut interdum enim suscipit quis. Mauris ex lectus, pharetra sed augue in, dignissim dictum lacus.
    
    Ut consectetur molestie ex eget imperdiet. Aenean at convallis dui. Mauris porta quam at blandit facilisis. Morbi iaculis leo a lectus porttitor, vitae pharetra risus cursus. Suspendisse potenti. Aenean non tortor a risus rutrum semper at in diam. Aenean luctus nulla id iaculis interdum. Vestibulum elementum, leo quis accumsan porttitor, nisi ante volutpat risus, a accumsan ex metus at eros. Donec ut quam sodales, vehicula nisi id, facilisis dui. Donec facilisis, sapien vitae luctus eleifend, odio nisi mollis nisi, in volutpat ipsum odio ut erat.
    
    Aliquam sed accumsan neque, sed mattis leo. Nunc euismod ipsum sit amet ligula consequat ultrices. Quisque vitae egestas massa. Morbi condimentum risus laoreet magna finibus, efficitur facilisis ligula cursus. Duis volutpat lacus vitae dolor hendrerit fringilla. Aliquam erat volutpat. Etiam vitae faucibus magna. Cras consectetur pharetra purus. Pellentesque ac dolor vestibulum, suscipit turpis porttitor, facilisis nulla. Donec ut purus sit amet tortor auctor cursus. Cras elementum, eros eget lacinia volutpat, mauris justo sodales arcu, nec euismod orci dui et dolor. Etiam ultricies dolor sit amet erat vulputate accumsan. Morbi ac tempus dolor.
    
    Mauris tempus leo sapien. Proin condimentum ipsum tortor, sit amet porta est viverra et. In dapibus malesuada vestibulum. Sed non lacinia mauris. Aliquam semper lacus quis diam tempus, ac ultricies elit congue. Mauris feugiat facilisis nisl dictum posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris felis purus, malesuada vestibulum scelerisque ut, imperdiet vel diam. Suspendisse feugiat ex vitae quam hendrerit dignissim. Proin mi diam, tempor ut pretium ut, laoreet ac eros. Quisque ut efficitur purus, sed porta mauris. Donec eget finibus magna. Morbi pharetra mollis magna, sit amet feugiat dui pulvinar in.`
    Share.share({ title: 'Test Share', text: text});
  }

}
