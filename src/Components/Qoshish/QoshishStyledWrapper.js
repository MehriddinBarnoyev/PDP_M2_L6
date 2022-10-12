import styled from "styled-components";

const QoshishStyledWrapper = styled.section`
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