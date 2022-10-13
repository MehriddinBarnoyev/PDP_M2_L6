import styled from "styled-components";

const QoshishStyledWrapper = styled.section`
    overflow: auto;
    .wrapper{
        div{
            .row{
                .col-sm-5{
                    .list-group{
                        a{
                            .list-group-item{
                                &:active{
                                    background-color: yellow;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

export default QoshishStyledWrapper;