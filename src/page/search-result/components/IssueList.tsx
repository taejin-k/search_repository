import styled from "styled-components";
import { useIssuesListQuery } from "../../../querys/repositoryDadaHooks";
import IssueCard from "./IssueCard";

const IssueList = () => {
  const issuesList = useIssuesListQuery();

  return (
    <IssueListStyled>
      <p className="all">
        총{" "}
        <span>
          {issuesList.total_count}
        </span>
        개의 데이터가 있습니다
      </p>
      <div className="listWrap">
        {issuesList.total_count ? (
          issuesList.items.map(item => item && <IssueCard key={item.html_url} item={item} />)
        ) : (
          <div className="nonData">레포지토리 이슈가 존재하지 않습니다</div>
        )}
      </div>
    </IssueListStyled>
  );
};

export default IssueList;

const IssueListStyled = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  padding: 0px 2px 0 30px;
  margin-top: 30px;

  .all {
    font-size: 1.5rem;
    margin-bottom: 14px;
    height: 18px;

    span {
      font-weight: bold;
    }
  }

  .listWrap {
    width: 100%;
    height: calc(100% - 62px);
    overflow: auto;

    .nonData {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
