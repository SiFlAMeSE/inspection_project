import React, { Component } from 'react';


class Knowledge1 extends Component {
  render() {
    return (
      <div>
        <center>
          <div class="modal fade No4" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <br /><br /><br /><br /><br />
                <table width="670px" border="0" className="tableK">
                  <tr><td width="10%"></td><td>

                    <h1>การตรวจวัดโคมไฟหน้า</h1>
                    <img width="100%" src={require('../img/imgknowledge/5-0.png')} alt="ป้าย" /><br />
                    <center>
                      <img width="80%" src={require('../img/imgknowledge/5-1.jpg')} alt="ป้าย" /><br />
                      <img width="100%" src={require('../img/imgknowledge/5-2.png')} alt="ป้าย" /><br />
                      <img width="100%" src={require('../img/imgknowledge/5-3.png')} alt="ป้าย" /><br />
                      <img width="100%" src={require('../img/imgknowledge/5-4.png')} alt="ป้าย" /><br />
                    </center>
                    <h3>1 โคมไฟแสงพุ่งต่ำ</h3>
                    <p>1) แสงสีขาว หรือเหลืองอ่อน</p>
                    <p>2) จำนวน 2 ดวง สูงจากพื้นราบไม่น้อยกว่า 40 เซนติเมตร แต่ไม่เกิน 1.35 เมตร</p>
                    <p>3) มุมกดจากแนวราบ ระหว่างร้อยละ 0.5 (0.29 องศา) ถึงร้อยละ 4 (2.29 องศา)และไม่เบี่ยงเบนไปทางขวา</p>
                    <p>4) ความเข้มแสงส่องสว่างของโคมไฟแต่ละดวงไม่น้อยกว่า 6,400 แคนเดลลา (cd)</p>
                    <h3>2 โคมไฟแสงพุ่งไกล</h3>
                    <p>1) แสงสีขาว หรือเหลืองอ่อน</p>
                    <p>2) จำนวน 2 ดวง หรือ 4 ดวง สูงจากพื้นราบไม่น้อยกว่า 40 เซนติเมตร แต่ไม่เกิน 1.35 เมตร</p>
                    <p>3) ลำแสงต้องไม่สูงเกินกว่าแนวราบและไม่เบี่ยงเบนไปทางขวา</p>
                    <p>4) ความเข้มแสงส่องสว่างของโคมไฟแต่ละดวงไม่น้อยกว่า 12,000 แคนเดลลา (cd)และทุกดวงรวมกัน ต้องไม่เกินกว่า 430,000 แคนเดลลา (cd)</p>
                    <img width="100%" src={require('../img/imgknowledge/5-5.png')} alt="ป้าย" /><br />
                    <h3>เครื่องทดสอบโคมไฟหน้าต้องมีคุณลักษณะ ดังนี้</h3>
                    <p>1) สามารถตรวจสอบโคมไฟหน้าที่มีความสูงจากพื้นราบตั้งแต่ 0.40 เมตร หรือน้อยกว่าจนถึง 1.35 เมตร หรือมากกว่า</p>
                    <p>2) สามารถวัดความเข้มการส่องสว่างของโคมไฟได้ตั้งแต่ 5,000 แคนเดลลา (cd) หรือน้อยกว่าจนถึง 120,000 แคนเดลลา (cd) หรือมากกว่า</p>
                    <p>3) วัดค่าการเบี่ยงเบนของลำแสงต่ำกว่าแนวราบได้ไม่น้อยกว่าร้อยละ 4 (2.29 องศา)</p>
                    <img width="100%" src={require('../img/imgknowledge/5-6.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/5-7.png')} alt="ป้าย" /><br /><br />
                    <h1>การตรวจวัดระดับเสียงจากท่อไอเสีย</h1>
                    <h3>วิธีการตรวจวัดระดับเสียงจากท่อไอเสีย</h3>
                    <p>1 ปรับเครื่องวัดให้ถูกต้อง</p>
                    <p>1) ปรับวงจรถ่วงน้ำหนักไปที่ A</p>
                    <p>2) ปรับลักษณะความไวตอบรับเสียงไปที่ Fast</p>
                    <p>3) เลือกช่วงการวัดให้ครอบคลุมระดับเสียงที่จะทำการวัด ประมาณ 40 – 130 เดซิเบล เอ</p>
                    <p>2 เดินเครื่องยนต์ให้อยู่ในอุณหภูมิใช้งานปกติ และปิดเครื่องปรับอากาศ</p>
                    <p>3 วางไมโครโฟนสูงเท่าความสูงของปลายท่อไอเสีย แต่ต้องสูงจากพื้นไม่น้อยกว่า 0.2 เมตร ห่างจากปลายท่อไอเสีย 0.5 เมตร แกนไมโครโฟนขนานกับพื้น และทำมุม 45 องศากับปลายท่อไอเสีย</p>
                    <p>4 ทำการวัด 2 ครั้ง ใช้ค่าที่วัดได้สูงสุดเป็นเกณฑ์ตัดสิน และค่าแตกต่างกันไม่เกิน 2 เดซิเบล เอ </p>
                    <p>5 กรณีค่าระดับเสียงจากการตรวจวัดทั้ง 2 ครั้ง แตกต่างกันเกิน 2 เดซิเบล เอ ให้ทำการวัดใหม่</p>
                    <img width="50%" src={require('../img/imgknowledge/8-1.png')} alt="ป้าย" />
                    <img width="50%" src={require('../img/imgknowledge/8-3.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/8-2.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/8-4.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/8-5.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/8-6.png')} alt="ป้าย" />
                    <img width="100%" src={require('../img/imgknowledge/8-7.png')} alt="ป้าย" /><br /><br />


                    <br /><br />
                  </td><td width="10%"></td>
                  </tr>
                </table>
              </div></div></div>
        </center>
      </div>
    );
  }
}

export default Knowledge1;