import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';


const AdminNoticeListPage = () => {
  // 상태 변수들 정의
  const [notices, setNotices] = useState([]);
  const [searchInTitle, setSearchInTitle] = useState(true);
  const [searchInContent, setSearchInContent] = useState(false);
  const [selectedNoticeIds, setSelectedNoticeIds] = useState([]);

  // State variables for filtering
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState('제목 만');
  const [authorOptions] = useState(['총학생회', '총동연', '중선관위']);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [dateRangeType, setDateRangeType] = useState('오늘');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // API base URL
  const apiUrl = 'http://52.78.32.224:8080/api/';

  // 모든 게시글 불러오기 API 호출
  const fetchNotices = async () => {
    try {
      const response = await axios.get(apiUrl + 'notices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  // 검색 기능 구현
  const handleSearch = async () => {
    try {
      // 검색 쿼리 생성
      const searchParams = {
        startDate: startDate,
        endDate: endDate,
        author: [], // 작성자 검색 기능은 아직 제공되지 않음으로 빈 배열로 처리
        searchInTitle: searchInTitle,
        searchInContent: searchInContent,
        query: searchQuery,
      };

      // 검색 API 호출
      const response = await axios.post(apiUrl + 'notices/search', searchParams);
      setNotices(response.data);
    } catch (error) {
      console.error('Error searching notices:', error);
    }
  };

  // 필터 초기화 기능 구현
  const handleFilterReset = () => {
    setSearchQuery('');
    setStartDate('');
    setEndDate('');
    setSearchInTitle(true);
    setSearchInContent(false);
    fetchNotices(); // 모든 게시글 다시 불러오기
  };

  // 공지글 고정 지정 기능 구현
  const handlePinNotices = async () => {
    try {
      // selectedNoticeIds를 사용하여 API 호출
      // ...
    } catch (error) {
      console.error('Error pinning notices:', error);
    }
  };

  // 공지글 고정 해제 기능 구현
  const handleUnpinNotices = async () => {
    try {
      // selectedNoticeIds를 사용하여 API 호출
      // ...
    } catch (error) {
      console.error('Error unpinning notices:', error);
    }
  };

  // 공지글 삭제 기능 구현
  const handleDeleteNotices = async () => {
    try {
      // selectedNoticeIds를 사용하여 API 호출
      // ...
    } catch (error) {
      console.error('Error deleting notices:', error);
    }
  };

  return (
    <div style={{ background: '#F6F6F6', padding: '50px' }}>
      {/* 페이지 맨 위 헤더 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
        <h1>공지사항</h1>
        <button className="btn btn-primary">공지글 작성하기</button>
      </div>

      {/* 검색 필터 */}
      <div className="mb-3">
        {/* 검색어 필터 */}
        <div className="row">
          <div className="col-sm-12 d-flex align-items-center">
            <label className="col-sm-2 col-form-label">검색어</label>
            <div className="col-sm-2">
              <select
                className="form-select w-100"
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
              >
                <option value="제목 만">제목 만</option>
                <option value="제목 및 내용">제목 및 내용</option>
              </select>

            </div>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control me-2"
                placeholder="검색어를 입력하세요"
                value={searchQuery}
                style={{maxWidth: "600px"}}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* 작성자 필터 */}
        <div className="row">
          <div className="col-sm-12 d-flex align-items-center">
            <label className="col-sm-2 col-form-label">작성자</label>
            <div className="form-check">
              {authorOptions.map((author) => (
                <label key={author} className="form-check-label me-5">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedAuthors.includes(author)}
                    onChange={() =>
                      setSelectedAuthors(
                        selectedAuthors.includes(author)
                          ? selectedAuthors.filter((a) => a !== author)
                          : [...selectedAuthors, author]
                      )
                    }
                  />
                  {author}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* 기간 필터 */}
        <div className="row">
          <div className="col-sm-12 d-flex align-items-center">
            <label className="col-sm-2 col-form-label">기간(게시일)</label>
            <div className="col-sm-6">
              {['오늘', '1주일', '1개월', '3개월', '6개월', '1년'].map((option) => (
                <button
                  key={option}
                  className={`btn btn-${dateRangeType === option ? 'primary' : 'white'} btn-fixed-width me-1`}
                  style={{border: '1px solid #E8E8E8', borderRadius: '5px', width: '80px'}}
                  onClick={() => setDateRangeType(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="col-sm-4">
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input
                  type="date"
                  className="form-control ms-2"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 테이블 */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>제목</th>
              <th>작성자</th>
              <th>게시일</th>
              <th>조회수</th>
              <th>수정하기</th>
            </tr>
          </thead>
          <tbody>
            {notices.map((notice) => (
              <tr key={notice.id}>
                {/* ...테이블 컬럼 내용... */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 선택한 공지글에 대한 작업 버튼 */}
      <div>
        <button onClick={handlePinNotices}>글 고정 지정</button>
        <button onClick={handleUnpinNotices}>글 고정 해제</button>
        {/* 선택한 공지글 수와 검색 결과 수를 표시 */}
        <span>
          [오늘 등록된 새 글 {notices.length}건] 검색 결과 {notices.length}건 검색 되었습니다.
        </span>
        <button onClick={handleDeleteNotices}>삭제</button>
      </div>
    </div>
  );
};

export default AdminNoticeListPage;
