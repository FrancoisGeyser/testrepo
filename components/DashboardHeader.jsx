import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

export const DashboardHeader = () => {
    return (
        <Root>
            <span>Dashboard My new amazing album</span>
            <div>
                <button>Settings</button>
                <button>Last 7 days</button>
                <button>Download as CSV</button>
                <button>New dashboard</button>
            </div>
        </Root>
    )
}
