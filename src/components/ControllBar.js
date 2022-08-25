import React from "react";

function ControllBar(props) {
  return (
    <section className="ControllBar">
      <div className="flex flex-row rounded-lg shadow-md bg-white mt-4 p-4">
        <p className="flex-auto">평가하기</p>
        <p className="flex-auto">리뷰 작성</p>
        <p className="flex-auto">좋아요</p>
        <p className="flex-auto">관심없어요</p>
      </div>
    </section>
  );
}

export default ControllBar;
