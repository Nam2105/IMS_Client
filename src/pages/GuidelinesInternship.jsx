import React, { Component } from "react";
import Sidenav from "../components/Sidenav";

class GuidelinesInternship extends Component {
  state = {};

  render() {
    return (
      <div className="row no-gutters">
        <div className="col-sm-2 sidenav">
          <Sidenav activeComponent="7" />
        </div>
        <div className="col-sm-10 of">
          <div className="container-fluid">
            <div class="alert alert-light" role="alert">
              <h4 style={{ color: "#000" }} class="alert-heading">
                HƯỚNG DẪN THỰC TẬP CHO SINH VIÊN
              </h4>
              <p style={{ color: "#000", fontSize: "18px" }}>
                Thực tập là cơ hội quan trọng giúp sinh viên trải nghiệm môi trường làm việc thực tế và phát triển kỹ năng chuyên môn. Dưới đây là những hướng dẫn dành cho sinh viên khi tham gia chương trình thực tập:
              </p>
              <hr />
              <h4 style={{ color: "#000" }} class="alert-heading">
                Hướng dẫn cụ thể:
              </h4>

              <ol style={{ marginLeft: "18px" }}>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Loại hình thực tập:</strong> Sinh viên có thể chọn thực tập toàn thời gian hoặc bán thời gian tùy theo lịch học và yêu cầu của chương trình thực tập.
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Thời gian và lương:</strong> Thực tập có thể kéo dài từ 1 đến 3 tháng và có thể được trả lương hoặc không lương tùy theo công ty.
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Thời gian phù hợp:</strong> 
                  <ul>
                    <li style={{ marginLeft: "15px", fontSize: "18px" }}>
                      Sinh viên năm cuối: Thực tập kéo dài tối đa 3 tháng.
                    </li>
                    <li style={{ marginLeft: "15px", fontSize: "18px" }}>
                      Sinh viên năm 2 và năm 3: Thực tập kéo dài tối đa 2 tháng.
                    </li>
                  </ul>
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Yêu cầu:</strong> Sinh viên cần đảm bảo đạt yêu cầu về thành tích học tập (trên 2.5 điểm trung bình chung).
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Chứng nhận hoàn thành:</strong> Sau khi hoàn thành thực tập, sinh viên cần nộp giấy chứng nhận hoàn thành cho nhà trường.
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Quy định của trường:</strong> Sinh viên phải có sự cho phép của nhà trường trước khi bắt đầu thực tập.
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Trách nhiệm và tuân thủ:</strong> Sinh viên cần tuân thủ các quy định và nội quy của công ty, thể hiện tính kỷ luật và tinh thần học hỏi cao.
                </li>
                <li style={{ color: "#000", fontSize: "18px" }}>
                  <strong>Lịch trình:</strong> Sinh viên cần duy trì lịch trình thực tập đều đặn và báo cáo tiến độ với người hướng dẫn.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GuidelinesInternship;
