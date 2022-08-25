import React from "react";

function ControllBar() {
  return (
    <section className="ControllBar">
      <div className="flex flex-row text-center rounded-lg shadow-md bg-white mt-4 p-4">
        <a href="/" className="flex-auto">
          평가하기
        </a>
        <a href="/" className="flex-auto">
          리뷰 작성
        </a>
        <a href="/" className="flex-auto">
          좋아요
        </a>
        <a href="/" className="flex-auto">
          관심없어요
        </a>
      </div>
    </section>
  );
}

export default ControllBar;
