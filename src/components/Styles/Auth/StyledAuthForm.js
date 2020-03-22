import styled from 'styled-components';

export const StyledAuthFormWrapper = styled.div`
    // background: rgb(224,96,21);
    // background: linear-gradient(90deg, rgba(224,96,21,1) 0%, rgba(224,96,21,1) 0%, rgba(231,141,93,1) 82%);

    background: #dea08b;
    // background: radial-gradient(circle, rgba(224,96,21,1) 0%, rgba(224,96,21,1) 0%, rgba(231,141,93,1) 82%);
    height: 100vh;
    overflow: hidden;
    padding-top: 1px;
    margin-top: -1px;


`;
export const StyledAuthForm = styled.div`
    background: #FFF;
    width: 55%;
    margin: 5rem auto;
    height: auto;
    border: 1px solid #e8a698; 
    border-radius: 5px;
    display: flex;

    .logo {
        margin: auto;
        width: 60px;
        height: 60px;

        img { 
            width: 100%;
            height: 100%;
        }
    }
    
    h3 {
        font-weight: 600;
        font-size: 18px;
        text-align: left;
        font-weigth: 600;
    }

    .left-side-form {
        width: 60%;

        .first-row {
            padding: 2rem 3rem 1rem;

        }
        .tiny-line {
            border 1px solid #fdf9f9;
            height: 1px;
            width: 100%;
        }
        
        .second-row {
            padding: 2rem 3rem;

            .form-group {
                display: flex;
                flex-direction: column;
                // margin: 15px 0;
                // padding: 0rem 1.5rem;
        
                input {
                    border-radius: 5px;
                    min-height: 30px;
                    border: 1px solid #eee;
                    color: #4f4f4f;
                    font-size: 14px;
                    padding: 5px 10px;
        
                    // &:focus {
                        //     border: 1px solid #e06045; 
                        // }
                  }
        
                  label {
                      font-size: 14px;
                      color: #333;
                      font-weight: 500;
                  }
            }
              
            .form-others {
                padding: 1.5rem 0rem;
    
                button {
                    font-size: 18px!important;
                }
                p {
                    &.text-14 {
                        margin-top: 0.8rem;
                    }
                    a {
                        &:hover {
                            color: #fe3119;
                            text-decoration: underline;
                        }
                    }
                }
        
            }
        
        }
        .form-img {
        width: 35%;
        }
    }

    .right-side-form {
        width: 40%;
        background: #eee;
    }

`;