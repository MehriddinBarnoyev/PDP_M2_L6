import styled from "styled-components";

const DashboardStyledWrapper = styled.section`
    aside{
        width: 320px;
        height: 100vh;
        z-index: 1;
        background-color: #152238;
        .list-group{
            margin-top: 20px;
            .list-group-item{
                margin-bottom: 10px;
                border-radius: 5px;
                border: none;
                background-color: #FFFCED;
                padding-left: 5px;
                padding-right: 5px;
                a{
                    padding: 5px 10px;
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
                    &.active{
                        background-color: #FFE755;
                        border-radius: 5px;
                        padding: 5px 10px;
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
            height: 89vh;
            overflow: auto !important;
        }
    }
`;

export default DashboardStyledWrapper;