// @generated
// This file is @generated by prost-build.
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct MyData {
    #[prost(string, tag="1")]
    pub block_hash: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub block_slot: u64,
    #[prost(uint64, tag="3")]
    pub block_timestamp: u64,
    #[prost(uint64, tag="4")]
    pub transactions_len: u64,
    #[prost(uint64, tag="5")]
    pub instructions_len: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct UserData {
    #[prost(string, tag="1")]
    pub user_address: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub transactions_count: u64,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct BlockUserData {
    #[prost(string, tag="1")]
    pub block_hash: ::prost::alloc::string::String,
    #[prost(uint64, tag="2")]
    pub block_slot: u64,
    #[prost(uint64, tag="3")]
    pub block_timestamp: u64,
    #[prost(message, repeated, tag="4")]
    pub users: ::prost::alloc::vec::Vec<UserData>,
}
// @@protoc_insertion_point(module)
