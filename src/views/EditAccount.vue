<template>
    <!-- <v-main>  -->
    <div class="profile edit">
        <section class="user-info">
            <v-row align="end" justify="end" class="avatar-wrapper">
                <h1> Editting Profile: </h1>
                <!-- <div  id="avatar" :style="avatar"></div> -->
                <v-avatar color="lightgray" size="50vw" max max-height="300px"> 
                    <!-- <v-icon dark> perm_identity </v-icon>  -->
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"> 
                </v-avatar>
            </v-row>
            <v-col align="center" class="name">
                <v-text-field v-model="message1" label="First Name" placeholder="TEST" background-color="transparent" clearable></v-text-field>
                <v-text-field v-model="message1" label="Last Name" placeholder="NAME" clearable></v-text-field>
            </v-col>
        </section>

        <v-row class="buttons">
                <!-- <v-row> -->
                    <v-btn @click="cancel" class="cancel">Cancel</v-btn>
                    <v-btn @click="save" class="save">Save Changes</v-btn>
                <!-- </v-row> -->
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
            cancel(){
                this.$router.push({path: "/profile"})
            },

            save() {

            },

            deleteAcc(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .profile {
        &.edit {
            .avatar-wrapper {
                padding: 10% 5%;

                position: relative;

                h1 {
                    position: absolute;
                    top: 20%;
                    left: 5%;
                }
            }

            .v-avatar {
                max-height: 200px;
                max-width: 200px;

                img {
                    object-fit: cover;
                    object-position: center;

                    // width: 30vw;
                    // height: 30vw;

                    // max-height: 200px;
                    // max-width: 200px;

                    width: 100%;
                    height: 100%;
                }
            }

            #avatar {
                width: 30vw;
                height: 30vw;

                max-height: 200px;
                max-width: 200px;
            }

            .name {
                padding: 0 5%;

                .v-field__overlay {
                    background-color: unset;
                }
            }
        }

        .buttons .v-btn {
                &.cancel, &.save {
                    width: 50vw;
                }

                &.save {
                    color: #2196F3;
                    border-left: solid thin black;
                }
        }
    }
</style>