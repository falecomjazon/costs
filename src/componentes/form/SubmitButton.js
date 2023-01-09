import styles from './SubmitButton.module.css'
function SubmitButton({name,value}) {
    return (
        <div >
            <button className={styles.btn} 
                id={name}
                name={name}
                type="submit"
              >
                {value}
            </button>
        </div>
    )
}
export default SubmitButton