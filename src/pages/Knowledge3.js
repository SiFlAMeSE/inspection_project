import React, { Component } from 'react';


class Knowledge1 extends Component {
  render() {
    return (
      <div>
        <center>
          <div class="modal fade No3" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <br /><br /><br /><br /><br />
                <table width="670px" border="0" className="tableK">
                  <tr><td width="10%"></td><td>

                    <h1>การทดสอบศูนย์ล้อหน้า</h1>
                    <img width="100%" src={require('../img/imgknowledge/3.png')} alt="ป้าย" /><br />
                    <h3>เครื่องทดสอบศูนย์ล้อต้องมีคุณลักษณะ ดังนี้</h3>
                    <p>1) ผิวหน้าแผ่นทดสอบมีคุณสมบัติป้องกันการลื่นไถลในขณะทำการทดสอบ</p>
                    <p>2) ต้องแสดงค่าการลื่นไถลของล้อได้ตั้งแต่ 0 ถึง 10 เมตรต่อกิโลเมตร หรือมากกว่า</p>
                    <p>3) มีความคลาดเคลื่อนได้ไม่เกินร้อยละ 3 ของค่าที่วัดได้</p>
                    <center>
                      <img width="40%" src={require('../img/imgknowledge/3-1.png')} alt="ป้าย" /><br /><br />
                      <img width="50%" src={require('../img/imgknowledge/3-2.png')} alt="ป้าย" />
                      <span>  </span>
                      <img width="50%" src={require('../img/imgknowledge/3-3.png')} alt="ป้าย" />
                    </center>

                    <h1>การทดสอบห้ามล้อ</h1>
                    <img width="100%" src={require('../img/imgknowledge/4-0.png')} alt="ป้าย" /><br />
                    <h3>1 วิธีการทดสอบห้ามล้อ</h3>
                    <p>1) นำรถเข้าเครื่องทดสอบ</p>
                    <p>2) ดำเนินการทดสอบตามคู่มือการทดสอบของบริษัทผู้ผลิตเครื่องมือ</p>
                    <p>3) ค่อยๆ เหยียบคันห้ามล้อจนแรงเหยียบสูงสุด (ไม่เหยียบห้ามล้ออย่างรวดเร็ว)
เครื่องทดสอบห้ามล้อต้องมีคุณลักษณะ ดังนี้</p>
                    <p>3.1) ลูกกลิ้งมีผิวป้องกันการลื่น</p>
                    <p>3.2) สามารถปรับความเที่ยงตรงได้</p>
                    <p>3.3) มีความเที่ยงตรง โดยมีค่าคลาดเคลื่อนไม่เกิน 100 นิวตัน ในการแสดงค่าการทดสอบของแรงห้ามล้อ
                      ในช่วง 0 นิวตัน ถึง 5,000 นิวตัน และมีค่าคลาดเคลื่อนไม่เกินร้อยละ 2
            ของค่าที่วัดได้ของแรงห้ามล้อที่มากกว่า 5,000 นิวตัน</p>
                    <p>3.4) มีความเที่ยงตรงของการชั่งน้ำหนัก โดยมีค่าคลาดเคลื่อนได้ไม่เกิน 30 กิโลกรัม
          ในช่วงน้ำหนัก 0 กิโลกรัม ถึง 1,000 กิโลกรัม และมีค่าคลาดเคลื่อนได้ไม่เกินร้อยละ 3 ของน้ำหนักที่ชั่งได้ที่การชั่งน้ำหนักมากกว่า 1,000 กิโลกรัม
</p>


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