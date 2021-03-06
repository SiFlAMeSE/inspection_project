import React, { Component } from 'react';


class Knowledge1 extends Component {
  render() {
    return (
      <div>
        <center>
          <div class="modal fade No1" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <br /><br /><br /><br /><br />
                <table width="670px" border="0" className="tableK">
                  <tr><td width="10%"></td><td>

                    <h1>การตรวจสอบความถูกต้องของรถเบื้องต้น</h1>
                    <p>
                      ให้ตรวจสอบความถูกต้องของรถเทียบกับสมุดคู่มือจดทะเบียนหรือสำเนาคู่มือ จดทะเบียนกับรถที่มาเข้า<br />
                      รับการตรวจสภาพ โดยตรวจสอบหมายเลขทะเบียนรถ ประเภทรถ ลักษณะรถ ชนิดรถ แบบรถ รุ่นรถ สีรถ <br />
                      หมายเลขตัวรถหรือหมายเลขโครงคัสซี ชนิดเครื่องยนต์ เลขเครื่องยนต์ ชนิดเชื้อเพลิง<br />
                      หากปรากฏข้อขัดข้องดังต่อไปนี้ให้สถานตรวจสภาพรถระงับการตรวจสภาพรถนั้นเสีย โดยแจ้งให้เจ้าของ<br />
                      รถหรือผู้ที่นำรถมาเข้ารับการตรวจสภาพให้นำรถไปตรวจสภาพ ณ สำนักงานขนส่ง เพื่อขอชำระภาษีและ<br />
                      ดำเนินการทางทะเบียนต่อไป<br />
                      • แผ่นป้ายทะเบียนรถสูญหาย ชำรุด หรือลบเลือนในสาระสำคัญ<br />
                      หมายเลขเครื่องยนต์ หมายเลขตัวรถ หรือหมายเลขโครงคัสซี มีร่องรอยการแก้ไขขดลบหรือลบเลือนจน<br />
                      ไม่สามารถตรวจสอบความถูกต้องได้<br />
                      • มีการแก้ไขเพิ่มเติมหรือเปลี่ยนแปลงสภาพเครื่องอุปกรณ์หรือส่วนควบของรถ ให้ผิดแผกแตกต่างใน<br />
                      สาระสำคัญ สำหรับรถที่จดทะเบียนตามกฎหมายว่าด้วย การขนส่งทางบก<br />
                      • มีการเปลี่ยนแปลงสีของรถหรือเปลี่ยนแปลงตัวรถหรือส่วนใดส่วนหนึ่ง ของรถให้ผิดไปจากรายการที่<br />
                      จดทะเบียนไว้ในใบคู่มือจดทะเบียนรถ สำหรับรถ ที่จดทะเบียนตามกฎหมายว่าด้วยรถยนต์<br />
                      (กรณีที่รถใช้ก๊าซปิโตรเลียมเหลวหรือใช้ก๊าซธรรมชาติอัดเป็นเชื้อเพลิง ให้ตรวจสอบ ความถูกต้องของ<br />
                      หนังสือรับรองการตรวจและทดสอบส่วนควบและเครื่องอุปกรณ์ด้วย)<br />
                    </p>


                    <img width="70%" src={require('../img/imgknowledge/1-1.png')} alt="ป้าย" />

                    <img width="100%" src={require('../img/imgknowledge/1-2.png')} alt="ป้าย" /><br /><br />


                    <img width="100%" src={require('../img/imgknowledge/1-3.png')} alt="ป้าย" />


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