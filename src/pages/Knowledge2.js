import React, { Component } from 'react';


class Knowledge1 extends Component {
  render() {
    return (
      <div>
        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".No2">modal 2</button> */}
        <center>
          <div class="modal fade No2" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
              <br /><br /><br /><br /><br />
                <table width="670px" border="0" className="tableK">
                  <tr><td width="10%"></td><td>

                    <h1>การตรวจพินิจภายนอก และอุปกรณ์ความปลอดภัย</h1>
                    <p>
                      โดยดำเนินการตรวจสภาพรถและวินิจฉัยผลการตรวจสภาพรถตามหลักเกณฑ์และวิธีการที่กำหนดท้ายประกาศ
                      กรมการขนส่งทางบก เรื่องหลักเกณฑ์ วิธีการตรวจสภาพรถ และข้อปฏิบัติของผู้ได้รับใบอนุญาต
                  จัดตั้งสถานตรวจสภาพรถ พ.ศ. 2555
              </p>
                    <h3>1 การตรวจพินิจรถยนต์</h3>
                    <p>1) การตรวจพินิจภายในรถ</p>
                    - ระบบบังคับเลี้ยว, พวงมาลัย<br />
                    - มาตรวัด, ไฟสัญญาณ<br />
                    - สวิทซ์ควบคุมไฟสัญญาณ, แตรสัญญาณ<br />
                    - อุปกรณ์ปัดและฉีดทำความสะอาดกระจกกันลมหน้า<br />
                    - กระจกกันลมหน้า - หลัง<br />
                    - กระจกเงาสำหรับมองหลัง<br />
                    - ที่นั่งผู้ขับ, ที่นั่งผู้โดยสาร<br />
                    - เข็มขัดนิรภัย<br />
                    <p>2) การตรวจพินิจภายนอกรถ</p>
                    - โคมไฟพุ่งไกล, โคมไฟพุ่งต่ำ<br />
                    - โคมไฟเลี้ยว<br />
                    - โคมไฟหรี่, ไฟอื่นๆ <br />
                    - กันชน<br />
                    - กงล้อ และยาง<br />
                    - บังโคลน<br />
                    - โครงสร้างและตัวถัง<br />
                    - สี<br />
                    - ประตู<br />
                    - กระจกด้านข้าง<br />
                    - กระจกเงาสำหรับมองหลัง<br />
                    - โคมไฟท้าย<br />
                    - โคมไฟหยุด<br />
                    - อุปกรณ์สะท้อนแสง<br />
                    - โคมไฟถอยหลัง<br />
                    - โคมไฟส่องป้ายทะเบียน<br />
                    - โคมไฟแสดงความกว้าง, ความสูง, ไฟอื่นๆ<br />
                    - กันชนท้าย<br /><br />
                    <center>
                      <h3>วงจรตรวจพินิจภายในและภายนอกรถ</h3>
                      <img width="50%" src={require('../img/imgknowledge/2-0.JPG')} alt="ป้าย" /><br />
                      <img width="100%" src={require('../img/imgknowledge/2-22.png')} alt="ป้าย" /><br /><br />


                      <h3>วงจรตรวจพินิจใต้ท้องรถ</h3>
                      <img width="50%" src={require('../img/imgknowledge/2-2.JPG')} alt="ป้าย" /><br />
                    </center>
                    <p>3) การตรวจพินิจใต้ท้องรถ </p>
                    - ระบบบังคับเลี้ยว, กลไกบังคับเลี้ยว
                    - ระบบรองรับน้ำหนัก, สปริง, แหนบ, โช๊คอัพ (เครื่องผ่อนการสั่นสะเทือน)
                    - เพลาล้อ, กงล้อและยาง
                    - อุปกรณ์ระบบห้ามล้อ
                    - โครงสร้างตัวถัง, โครงคัสซี
                    - ระบบส่งกำลัง, คลัทซ์, เกียร์, เพลากลาง, เฟืองท้าย
                    - ระบบไอเสีย, เครื่องระงับเสียง
                    - แท่นเครื่อง, ยางแท่นเครื่อง
                    - อุปกรณ์ขจัดมลพิษ Catalytic Converter
                    - ระบบเชื้อเพลิง, ท่อส่งเชื้อเพลิง, ท่อส่งก๊าซ
                <center>
                      <img width="100%" src={require('../img/imgknowledge/2-4.png')} alt="ป้าย" /><br />
                    </center>
                    <h3>1 การตรวจพินิจรถยนต์</h3>
                    <p>ขั้นตอนการตรวจพินิจรถจักรยานยนต์</p>
                    <center>
                      <img width="100%" src={require('../img/imgknowledge/2-3.png')} alt="ป้าย" /><br />
                      <img width="100%" src={require('../img/imgknowledge/2-5.png')} alt="ป้าย" /><br />
                    </center>
                    
                    <br /><br />
                  </td><td width="10%"></td>
                  </tr><center>
                  </center>
                </table>
              </div></div></div>
        </center>

      </div>
    );
  }
}

export default Knowledge1;