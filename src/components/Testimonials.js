import styled from 'styled-components'
import avatarImage from '../assets/avatarImage.jpg'

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="comments">
        <h3>Customer Comments</h3>
        <div className="comment-list">
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>Sarah Connor</h4>
                <span>Software Engineer</span>
              </div>
            </div>
            <p>"Outstanding service. Will definitely return!"</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>John Wick</h4>
                <span>Freelancer</span>
              </div>
            </div>
            <p>"Highly professional and very skilled team."</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>Mary Poppins</h4>
                <span>Consultant</span>
              </div>
            </div>
            <p>"A truly customer-centric approach. Loved it!"</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>James Bond</h4>
                <span>Agent</span>
              </div>
            </div>
            <p>"Quick and efficient, couldn’t ask for more."</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>Anna Baker</h4>
                <span>Designer</span>
              </div>
            </div>
            <p>"Exceeded my expectations in every way possible."</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
          <div className="comment">
            <div className="info">
              <img src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png" alt="Customer" />
              <div className="details">
                <h4>Tom Hardy</h4>
                <span>Actor</span>
              </div>
            </div>
            <p>"Great experience overall. Would recommend to anyone."</p>
            <div className="rating">⭐⭐⭐⭐☆</div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
    h2 {
      font-size: 2.5rem;
      color: #333;
    }
  }
  .testimonials {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;

    .testimonial {
      background-color: aliceblue;
      width: 300px;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        transform: translateY(-10px);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 20px;
      }

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          border-radius: 0.5rem;
          height: 60px;
          width: 60px;
          margin-bottom: 0.5rem;
        }
        .details {
          text-align: center;
          h4 {
            margin: 0;
          }
          span {
            font-size: 0.9rem;
            color: gray;
          }
        }
      }

      p {
        font-size: 0.9rem;
        color: #555;
        margin-top: 1rem;
      }

      .rating {
        font-size: 1.2rem;
        color: #f4c542;
        margin-top: 0.5rem;
      }
    }
  }
  .comments {
    margin-top: 3rem;
    text-align: center;
    h3 {
      font-size: 1.8rem;
      color: #333;
      margin-bottom: 1.5rem;
    }
    .comment-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1.5rem;

      .comment {
        background-color: aliceblue;
        width: 300px;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

        &:hover {
          transform: translateY(-10px);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 10px 20px;
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            border-radius: 0.5rem;
            height: 50px;
            width: 50px;
            margin-bottom: 0.5rem;
          }
          .details {
            h4 {
              margin: 0;
            }
            span {
              font-size: 0.8rem;
              color: gray;
            }
          }
        }

        p {
          font-size: 0.85rem;
          color: #555;
          margin-top: 0.5rem;
        }

        .rating {
          font-size: 1.2rem;
          color: #f4c542;
          margin-top: 0.5rem;
        }
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials,
    .comments .comment-list {
      flex-direction: column;
      align-items: center;

      .testimonial,
      .comment {
        width: 100%;
      }
    }
  }
`
