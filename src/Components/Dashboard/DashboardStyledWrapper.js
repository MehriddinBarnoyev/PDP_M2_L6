import styled from "styled-components";

const DashboardStyledWrapper = styled.section`
    aside{
        width: 300px;
        height: 100vh;
        z-index: 1;
        background-color: #FFFCED;
        .list-group{
            margin-top: 20px;
            .list-group-item{
                margin-bottom: 10px;
                border-radius: 5px;
                border: none;
                background-color: #FFFCED;
                padding-left: 5px;
                padding-right: 5px;
                .link{
                    text-decoration: none;
                    img{
                    margin-right: 10px;
                    }
                    .imgGroup{
                        width: 20px; 
                        height: 20px;
                    }
                    span{
                        h6{
                            margin: 0px;
                        }
                        p{
                            font-size: 11px;
                            margin: 0px;
                        }
                    }
                }
            }
        }
    }
    .rightside{
        flex: 1;
        header{
            z-index: 1;
        }
        main{

        }
    }
`;

export default DashboardStyledWrapper;