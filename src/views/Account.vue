<template>
    <!-- <v-main>  -->
    <div class="profile">
        <section class="user-info">
            <v-row align="center" justify="center" class="avatar-wrapper">
                <!-- <div  id="avatar" :style="avatar"></div> -->
                <v-avatar color="lightgray" size="50vw" max max-height="300px"> 
                    <v-icon dark> perm_identity </v-icon> 
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"> 
                </v-avatar>
            </v-row>
            <v-col align="center" class="name">
                    <p> TEST NAME </p> 
                    <p class="orders"> Orders: 20 </p>
            </v-col>
        </section>

        <v-row class="buttons">
                <v-btn @click="edit">Edit Profile</v-btn>
                <v-btn @click="deleteAcc" class="delete">Delete Account</v-btn>
        </v-row>
    </div>
    <!-- </v-main> -->
</template>

<script>
import { getUserInfo } from "../server/db.js";
    export default {
        name: "Profile",
        
        computed: {
            avatar () {
                // return "background-image: url('" + this.user.src + "');";
            }
        },

        methods: {
            edit(){
                this.$router.push({path: "/profile/edit"})
            },
            deleteAcc(){
                
            }
        }
    }
</script>

<style lang="scss">
    .profile {
        padding: 0 !important;
        height: calc(100vh - 56px);

        .v-row {
            margin: 0;
        }

        .user-info {
            margin: 0;
            height: 60%;
        }

        .avatar-wrapper {
            padding: 25%;
            padding-bottom: 10%;
        }

        #avatar {
            background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg');
            width: 50vw;
            height: 50vw;
            background-size: cover;
            background-position: center;
            border-radius: 50%;

            max-height: 300px;
            max-width: 300px;
        }

        .v-avatar {
            max-height: 300px;
            max-width: 300px;

            img {
                object-fit: cover;
                object-position: center;

                width: 50vw;
                height: 50vw;
                max-width: 300px;
                max-height: 300px;

                // width: 100%;
                // height: 100%;
            }
        }

        .name {
            padding: 0;

            .orders {
                color: #373737;
            }
        }

        .buttons {
            height: 40%;

            .v-btn {
                width: 100vw;
                height: 50%;
                padding: 0;

                box-shadow: none;
                
                border-top: solid thin black;
                border-radius: unset;
            }

            .delete {
                color: red;
            }
        }
    }
</style>